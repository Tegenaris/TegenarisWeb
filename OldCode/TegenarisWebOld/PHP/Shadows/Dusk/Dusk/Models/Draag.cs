using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Dusk.Models
{
  public class Draag : IFighter
  {
    public int Strength { get; set; }
    public int Attack { get; set; }
    public int Defense { get; set; }
    public int Agility { get; set; }
    public int Vitality { get; set; }

    public Draag(int strength, int attack, int defense, int agility, int vitality) {
      this.Strength = strength;
      this.Attack = attack;
      this.Defense = defense;
      this.Agility = agility;
      this.Vitality = vitality;
    }

    //Define special attacks here
  }
}
