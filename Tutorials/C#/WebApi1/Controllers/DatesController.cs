using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Runtime.Caching;
using System.Web.Http;
using System.Web.Script.Serialization;
using System.Xml;

namespace WebApi1.Controllers
{
    public class DatesController : ApiController
    {
        [System.Web.Http.HttpGet]
        [Route("DateApi/GetDate")]
        public async System.Threading.Tasks.Task<HttpResponseMessage> GetStock()
        {
            string resultJson;
            string dateInfo;


            ObjectCache StockInfoCache = MemoryCache.Default;

            CacheItemPolicy cacheItemPolicy = new CacheItemPolicy()
            { AbsoluteExpiration = DateTimeOffset.Now.AddMinutes(15) };

            //ObjectCache resultJsonfromCache = StockInfoCache.Get("resultJson");
            bool found = StockInfoCache.Contains("resultJson");
            if (found)
            {
                resultJson = StockInfoCache.Get("resultJson").ToString();
            }
            else
            {

                dateInfo = await GetDateData(0);

                var javaScriptSerializer = new JavaScriptSerializer();
                var dateInfoJson = javaScriptSerializer.DeserializeObject(dateInfo);

                //This is the formated response that needs to be cached
                resultJson = javaScriptSerializer.Serialize(new { DateInfo = dateInfoJson });

                StockInfoCache.Add("resultJson", resultJson, cacheItemPolicy);
            }
            return Request.CreateResponse(HttpStatusCode.OK, resultJson, Configuration.Formatters.JsonFormatter);
        }

        private async System.Threading.Tasks.Task<string> GetDateData(int stockType)
        {
            string url = null;
            string jsonStock = null;
            switch (stockType)
            {
                case 0: //
                    url = "";
                    break;

                case 1: //
                    url = "";
                    break;
            }

            //Parse to XML
            using (HttpClient httpClient = new HttpClient())
            {

                using (HttpRequestMessage request = new HttpRequestMessage(new HttpMethod("GET"), url))
                {
                    HttpResponseMessage response = await httpClient.SendAsync(request);
                    HttpContent responseContent = response.Content;
                    // Get the stream of the content.
                    using (var reader = new StreamReader(await responseContent.ReadAsStreamAsync()))
                    {
                        // Write the output.
                        string londonStockResponse = await reader.ReadToEndAsync();
                        XmlDocument xmlStockResponse = new XmlDocument();
                        xmlStockResponse.LoadXml(londonStockResponse);
                        jsonStock = JsonConvert.SerializeXmlNode(xmlStockResponse);
                    }
                }
            }
            return jsonStock;
        }
    }
}