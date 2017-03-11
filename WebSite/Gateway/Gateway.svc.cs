using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Channels;
using System.ServiceModel.Web;
using System.Text;
using System.IO;
using System.Web.Script.Serialization;
using System.Web;

namespace Gateway
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "Gateway" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select Gateway.svc or Gateway.svc.cs at the Solution Explorer and start debugging.
    public class Gateway : iGateway
    {
        public string Request(Stream JSONDataStream)
        {
            /* RESULT LAYOUT
             Result
            ------------------------------------------- */
            int iError = 0;
            string sResult = "{ERROR}";
            try
            {
                // Read the Parameter Stream into a string ...
                StreamReader reader = new StreamReader(JSONDataStream);
                string JSONdata = reader.ReadToEnd();

                // If the parameters were extracted correctly..
                if (iError == 0)
                {
                    ClassDatabase DB = new ClassDatabase();

                    string SQL = "web.Request "
                         + " '" + JSONdata.Replace("'", "''") + "'";
                    sResult = DB.GetSingleValue(SQL);

                    DB.Close();
                }                
            }
            catch (Exception)
            {
                iError = -1;
                sResult = "{ERROR}[-1]";
            }
            return sResult;
        }
    }
}
