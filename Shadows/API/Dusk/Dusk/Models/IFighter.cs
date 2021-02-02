using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dusk.Models
{
  interface IFighter
  {
    int Strength { get; set; }
    int Attack { get; set; }
    int Defense { get; set; }
    int Agility { get; set; }
    int Vitality { get; set; }
  }
}
