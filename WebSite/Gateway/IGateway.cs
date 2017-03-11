using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;
using System.IO;
using System.Web;

namespace Gateway
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the interface name "iGateway" in both code and config file together.
    [ServiceContract]
    public interface iGateway
    {

        // TODO: Add your service operations here
        /* Request */
        [OperationContract]
        [WebInvoke(Method = "POST", ResponseFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped, UriTemplate = "Request")]
        string Request(Stream JSONdataStream);
    }


    // Use a data contract as illustrated in the sample below to add composite types to service operations.

}
