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
        //TODO - put caching in a different function
        [System.Web.Http.HttpGet]
        [Route("DateApi/GetDate")]
        public async System.Threading.Tasks.Task<HttpResponseMessage> GetStock()
        {
            string resultJson;
            string dateInfo = "";

            ObjectCache StockInfoCache = MemoryCache.Default;

            CacheItemPolicy cacheItemPolicy = new CacheItemPolicy()
            { AbsoluteExpiration = DateTimeOffset.Now.AddMinutes(15) };

            bool found = StockInfoCache.Contains("dateInfo");
            if (found)
            {
                //Retrieve data from cache
                resultJson = StockInfoCache.Get("dateInfo").ToString();
            }
            else
            {
                //Pull data from the actual API
                dateInfo = await GetDateData(0);
                StockInfoCache.Add("dateInfo", dateInfo, cacheItemPolicy);
            }
            return Request.CreateResponse(HttpStatusCode.OK, dateInfo, Configuration.Formatters.JsonFormatter);
        }

        private async System.Threading.Tasks.Task<string> GetDateData(int stockType)
        {
            string url = "http://worldclockapi.com/api/json/est/now";
            string dateJSON = null;

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
                        dateJSON = await reader.ReadToEndAsync();
                        //XmlDocument xmlStockResponse = new XmlDocument();
                        //xmlStockResponse.LoadXml(londonStockResponse);
                        //jsonStock = JsonConvert.SerializeXmlNode(xmlStockResponse);
                    }
                }
            }
            return dateJSON;
        }
    }
}