using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Dusk.Models
{
  public class UserWarrior : IFighter
  {
    public int Strength { get; set; }
    public int Attack { get; set; }
    public int Defense { get; set; }
    public int Agility { get; set; }
    public int Vitality { get; set; }
    public int Id { get; set; }
  }
}
