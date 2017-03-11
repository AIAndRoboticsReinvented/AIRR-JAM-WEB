using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Net;
using System.Net.Mail;
using System.IO;
using System.Runtime.InteropServices;
using System.Drawing;
using System.Drawing.Imaging;
using System.Web;


namespace Gateway
{

    /// <summary>
    /// The ClassDatabase object provides all the functions that are required to access and manipulate the database by the api functions.
    /// It is important that each of the functions close their connection to the database to avoid hanging connections and application
    /// failure.
    /// </summary>
    class ClassDatabase
    {
        /// <summary>
        /// Database server to connect to
        /// </summary>
        private string Server = "10.0.90.172"; //"192.168.1.102"; //"209.34.232.75"; // "192.168.1.102";
                                                            /// <summary>
                                                            /// Database instance to connect to on the server
                                                            /// </summary>
        private string Database = "JAM.APP";
        /// <summary>
        /// The user name to use to establish a connection to the database
        /// </summary>
        private string User = "sa";
        /// <summary>
        /// The password of the user account used to connect to the database
        /// </summary>
        private string Password = "AQ1SW2de3fr4";


        /// <summary>
        /// The connection that will be executed against the database.
        /// </summary>
        public System.Data.SqlClient.SqlConnection CN;

        /// <summary>
        /// The string builder that is used for batch SQL statements
        /// </summary>
        private StringBuilder BatchSQL = new StringBuilder();

        /// <summary>
        /// The batch mode for SQL processing.
        /// </summary>
        private bool bBatchMode = false;


        /// <summary>
        /// Initializes a new instance of the <see cref="ClassDatabase"/> class.
        /// </summary>
        public ClassDatabase()
        {
            CN = new System.Data.SqlClient.SqlConnection(GetConnectionString());
            Open();
        }


        /// <summary>
        /// Initializes a new instance of the <see cref="ClassDatabase"/> class.
        /// </summary>
        /// <param name="SVR">The server to connect to.</param>
        /// <param name="DB">The database on the server to connect to.</param>
        /// <param name="Usr">The user on the server to connect to.</param>
        /// <param name="Pwd">The password of the user on the server to connect to.</param>
        public ClassDatabase(string SVR, string DB, string Usr, string Pwd)
        {
            /// Store the connection information for the database 
            /// in the local object variables.
            Server = SVR;
            Database = DB;
            User = Usr;
            Password = Pwd;

            /// Establish a connection to the database.
            CN = new System.Data.SqlClient.SqlConnection(GetConnectionString());
            /// Open communication over the existing database connection.
            Open();
        }


        /// <summary>
        /// Opens the communication pipeline for the current database connection.
        /// </summary>
        public void Open()
        {
            try
            {
                CN.Close();
            }
            catch { }
            CN.Open();
            //Execute("open symmetric key GoAuthorize decryption by certificate GoAuthorize with password = 'G0@uth0r1z3D@tA3ncrYpt!0nP@s5w0rd'");
        }


        /// <summary>
        /// Closes the communication pipeline for the current database connection.
        /// </summary>
        /// <returns>A zero length string</returns>
        public string Close()
        {
            CN.Close();
            return "";
        }

        /// <summary>
        /// This function returns the Connection String used to connect to the database.
        /// </summary>
        /// <returns>A string containing the connection string.</returns>
        public string GetConnectionString()
        {
            return
                    "Data Source=" + Server + ";" +
                    "Initial Catalog=" + Database + ";" +
                    "Integrated Security=No;" +
                    "UID=" + User + ";" +
                    "PWD=" + Password + ";" +
                    "Connection Timeout=600;" +
                    "Packet Size=24000;"; // Asynchronous Processing=true;
        }
        /// <summary>
        /// This function will execute an SQL statement on the currently 
        /// connected database and return the results as a dataset
        /// </summary>
        /// <param name="SQL">The SQL statement to execute on the database.</param>
        /// <returns>The results from the database as a dataset.</returns>
        public System.Data.DataSet GetData(string SQL)
        {
            bool done = false;
            /// Prepare a dataset to return to the user.
            System.Data.DataSet ds = new System.Data.DataSet("Result");
            while (!done)
            {
                try
                {
                    if (CN.State != System.Data.ConnectionState.Open)
                        Open();
                    /// Prepare the adapter to execute against the database.
                    System.Data.SqlClient.SqlDataAdapter da = new System.Data.SqlClient.SqlDataAdapter(SQL, CN);
                    da.SelectCommand.CommandTimeout = 0;
                    /// Fill the result set with the information from the database.                  
                    da.Fill(ds);
                    done = true;
                }
                catch (System.Exception ex)
                {
                    if (ex.Message.StartsWith("Timeout expired.") == false) done = true;
                }
            }
            /// return the dataset to the user.
            return ds;
        }


        /// <summary>
        /// This function will execute the specified SQL statement on the database that
        /// is currently connected.
        /// </summary>
        /// <param name="SQL">The sql statement to execute.</param>
        public void Execute(string SQL)
        {
            if (bBatchMode)
            {
                BatchSQL.Append("EXEC ");
                BatchSQL.Append(SQL);
                BatchSQL.Append(";");
            }
            else
            {
                if (CN.State != System.Data.ConnectionState.Open) Open();

                /// Prepare the command handler for the SQL statement to execute.
                System.Data.SqlClient.SqlCommand myCommand = new System.Data.SqlClient.SqlCommand(SQL, CN);

                myCommand.CommandTimeout = 0;
                /// Execute the command against the database, return no result.
                myCommand.ExecuteNonQuery();
            }
        }


        /// <summary>
        /// Obtains the value of the first column in the first row of a result set
        /// from the database.
        /// </summary>
        /// <param name="SQL">The SQL to obtain the dataset from.</param>
        /// <returns>The value of the first column in the first row of a result set as a string.</returns>
        public string GetSingleValue(bool Condition, string SQL)
        {

            //if (LastSelect.StartsWith("None")) LogUpdate();

            string result = "";
            if (Condition)
            {
                result = GetSingleValue(SQL);
            }
            return result;
        }

        /// <summary>
        /// Obtains the value of the first column in the first row of a result set
        /// from the database.
        /// </summary>
        /// <param name="SQL">The SQL to obtain the dataset from.</param>
        /// <returns>The value of the first column in the first row of a result set as a string.</returns>
        public string GetSingleValue(string SQL)
        {
            string result = "";
            /// Obtain the data from the database.
            System.Data.DataSet ds = GetData(SQL);

            /// return the value of the first field in the first record as a string
            /// if there is an error return a zero length string.
            try
            {
                if (ds.Tables[0].Rows.Count > 0) result = ds.Tables[0].Rows[0][0].ToString();
            }
            catch (System.Exception ex)
            {
                //UserTrans("ClassDatabase.GetSingleValue", "Error", ex.Message);
                //UserTrans("ClassDatabase.GetSingleValue", "Error", ex.Source);
                //UserTrans("ClassDatabase.GetSingleValue", "Error", ex.StackTrace);
                if (ex.Message != "")
                    result = "";
            }
            /// return the result to the caller.
            return result;
        }

        /// <summary>
        /// This function will run multiple sql statements ending with '<go>' (not including select statements).
        /// The last statement should not end with the '<go>' keyword.
        /// </summary>
        /// <param name="sql">The complex SQL statement to execute</param>
        public void ExecuteComplex(string sql)
        {
            // <go> is the SQL string delimiter in the 
            // source SQL data string and <go>
            // IS case sensitive...
            string[] SplitAt = { "<go>" };
            string[] statements = sql.Split(SplitAt, StringSplitOptions.RemoveEmptyEntries);

            foreach (string statement in statements)
            {
                Execute(statement);
            }
        }


        /// <summary>
        /// Products the result of the specified SQL as an HTML string.
        /// </summary>
        /// <param name="SQL">The SQL to execute.</param>
        /// <returns>System.String containing the data of the result set as a single string.</returns>
        public string HTMLSQL(string SQL)
        {
            StringBuilder Result = new StringBuilder("");
            System.Data.DataTable table = GetData(SQL).Tables[0];
            int iRow = -1;
            foreach (System.Data.DataRow row in table.Rows)
            {
                iRow = iRow * -1;
                foreach (System.Data.DataColumn col in table.Columns)
                {
                    Result.Append(row[col.ColumnName].ToString());
                }
            }
            return Result.ToString();
        }


        public string HTMLDiv(bool Condition, string DivName, string SQL, string CountCol)
        {
            if (Condition)
                return HTMLDiv(DivName, SQL, CountCol);
            else
                return "";
        }

        public string HTMLDiv(bool Condition, string DivName, string SQL)
        {
            if (Condition)
                return HTMLDiv(DivName, SQL);
            else
                return "";
        }

        public string HTMLDiv(string DivName, string SQL)
        {
            StringBuilder Result = new StringBuilder();

            try
            {
                System.Data.DataTable table = GetData(SQL).Tables[0];

                Result.Append("<div id=\"" + DivName + "\">" + "\r\n");


                Result.Append("<div id=\"Headers\">" + "\r\n");
                foreach (System.Data.DataColumn col in table.Columns)
                {
                    Result.Append("<div id=\"Header" + col.ColumnName.Replace(" ", "").Replace("#", "Num").Replace("$", "Dol").Replace("%", "Pct") + "\">");
                    Result.Append(col.ColumnName);
                    Result.Append("</div>" + "\r\n");
                }
                Result.Append("</div>" + "\r\n");
                int iRow = -1;


                foreach (System.Data.DataRow row in table.Rows)
                {
                    iRow = iRow * -1;

                    Result.Append("<div class=\"" + (iRow == 1 ? "Odd" : "Even") + "Row\">" + "\r\n");



                    foreach (System.Data.DataColumn col in table.Columns)
                    {

                        Result.Append("<div class=\"" + col.ColumnName.ToString().Replace(" ", "").Replace("#", "Num").Replace("$", "Dol").Replace("%", "Pct") + "\">");
                        Result.Append(row[col.ColumnName].ToString());
                        Result.Append("</div>");
                    }



                    Result.Append("</div>" + "\r\n");

                }

                Result.Append("</div>" + "\r\n");
            }
            catch { }
            return Result.ToString();
        }


        public string HTMLDiv2(string DivName, string SQL, string IDCol)
        {
            StringBuilder Result = new StringBuilder();

            try
            {
                System.Data.DataTable table = GetData(SQL).Tables[0];

                Result.Append("<div id=\"" + DivName + "\">" + "\r\n");


                Result.Append("<div id=\"Headers\">" + "\r\n");
                foreach (System.Data.DataColumn col in table.Columns)
                {
                    Result.Append("<div id=\"Header" + col.ColumnName.Replace(" ", "").Replace("#", "Num").Replace("$", "Dol").Replace("%", "Pct") + "\">");
                    Result.Append(col.ColumnName);
                    Result.Append("</div>" + "\r\n");
                }
                Result.Append("</div>" + "\r\n");
                int iRow = -1;


                foreach (System.Data.DataRow row in table.Rows)
                {

                    iRow = (System.Convert.ToInt32(row[IDCol].ToString()) % 2 == 0) ? 1 : -1;


                    Result.Append("<div class=\"" + (iRow == 1 ? "Odd" : "Even") + "Row\">" + "\r\n");



                    foreach (System.Data.DataColumn col in table.Columns)
                    {

                        Result.Append("<div class=\"" + col.ColumnName.ToString().Replace(" ", "").Replace("#", "Num").Replace("$", "Dol").Replace("%", "Pct") + "\">");
                        Result.Append(row[col.ColumnName].ToString());
                        Result.Append("</div>");
                    }



                    Result.Append("</div>" + "\r\n");

                }

                Result.Append("</div>" + "\r\n");
            }
            catch { }
            return Result.ToString();
        }



        public string HTMLDiv(string DivName, string SQL, string CountCol)
        {
            StringBuilder Result = new StringBuilder();

            try
            {
                System.Data.DataTable table = GetData(SQL).Tables[0];

                Result.Append("<div id=\"" + DivName + "\">" + "\r\n");


                Result.Append("<div id=\"Headers\">" + "\r\n");

                Result.Append("<div id=\"Header" + CountCol.Replace(" ", "").Replace("#", "Num").Replace("$", "Dol").Replace("%", "Pct") + "\">");
                Result.Append(CountCol);
                Result.Append("</div>" + "\r\n");


                foreach (System.Data.DataColumn col in table.Columns)
                {
                    Result.Append("<div id=\"Header" + col.ColumnName.Replace(" ", "").Replace("#", "Num").Replace("$", "Dol").Replace("%", "Pct") + "\">");
                    Result.Append(col.ColumnName);
                    Result.Append("</div>" + "\r\n");
                }
                Result.Append("</div>" + "\r\n");
                int iRow = -1;
                int iRowID = 0;

                foreach (System.Data.DataRow row in table.Rows)
                {
                    iRow = iRow * -1;
                    iRowID++;

                    Result.Append("<div class=\"" + (iRow == 1 ? "Odd" : "Even") + "Row\">" + "\r\n");

                    Result.Append("<div class=\"" + CountCol.ToString().Replace(" ", "").Replace("#", "Num").Replace("$", "Dol").Replace("%", "Pct") + "\">");
                    Result.Append(iRowID.ToString());
                    Result.Append("</div>");



                    foreach (System.Data.DataColumn col in table.Columns)
                    {

                        Result.Append("<div class=\"" + col.ColumnName.ToString().Replace(" ", "").Replace("#", "Num").Replace("$", "Dol").Replace("%", "Pct") + "\">");
                        Result.Append(row[col.ColumnName].ToString());
                        Result.Append("</div>");
                    }



                    Result.Append("</div>" + "\r\n");

                }

                Result.Append("</div>" + "\r\n");
            }
            catch { }
            return Result.ToString();
        }

        public string HTMLDiv(string DivName, string SQL, bool HeaderLead)
        {
            StringBuilder Result = new StringBuilder();
            System.Data.DataTable table = GetData(SQL).Tables[0];

            Result.Append("<div id=\"" + DivName + "\">" + "\r\n");


            Result.Append("<div id=\"Headers\">" + "\r\n");
            if (HeaderLead)
            {
                Result.Append("<div id=\"HeaderLead\"></div>");
            }
            foreach (System.Data.DataColumn col in table.Columns)
            {
                Result.Append("<div id=\"Header" + col.ColumnName.Replace(" ", "").Replace("#", "Num").Replace("$", "Dol").Replace("%", "Pct") + "\">");
                Result.Append(col.ColumnName);
                Result.Append("</div>" + "\r\n");
            }
            Result.Append("</div>" + "\r\n");
            int iRow = -1;


            foreach (System.Data.DataRow row in table.Rows)
            {
                iRow = iRow * -1;

                Result.Append("<div class=\"" + (iRow == 1 ? "Odd" : "Even") + "Row\">" + "\r\n");



                foreach (System.Data.DataColumn col in table.Columns)
                {

                    Result.Append("<div class=\"" + col.ColumnName.ToString().Replace(" ", "").Replace("#", "Num").Replace("$", "Dol").Replace("%", "Pct") + "\">");
                    Result.Append(row[col.ColumnName].ToString());
                    Result.Append("</div>");
                }



                Result.Append("</div>" + "\r\n");

            }

            Result.Append("</div>" + "\r\n");
            return Result.ToString();
        }



    }

}