using Dusk.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Dusk.Controllers
{
  public class DraagController : ApiController
  {
    public string Get()
    {
      Draag youngDraag = new Draag(1, 10, 10, 2, 100);
      return youngDraag.ToString();
    }
  }
}
