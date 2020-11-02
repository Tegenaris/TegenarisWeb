using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Dusk.Controllers
{
  public class DuskTestController : ApiController
  {
    public int getMeNumber()
    {
      return 2;
    }
  }
}
