using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;

namespace Gateway
{
    /// <summary>
    /// Summary description for Text
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class Text : System.Web.Services.WebService
    {

        [WebMethod]        
        public string Received(
                string phone,
                string from,
                string body
            )
        {
            ClassDatabase DB = new ClassDatabase();

            string SQL = "texts.Received "
                + "'" + phone + "'" 
                + ",'" + from + "'"
                 + ",'" + body.Replace("'", "''") + "'";

            DB.Execute(SQL);

            DB.Close();

            return "OK";
        }


        [WebMethod]        
        public string Receive(
                string name,
                string number,
                string content
            )
        {
            ClassDatabase DB = new ClassDatabase();

            string SQL = "texts.Received "
                + "'" + name + "'" 
                + ",'" + number + "'"
                 + ",'" + content.Replace("'", "''") + "'";

            DB.Execute(SQL);

            DB.Close();

            return "OK";
        }

    }
}
