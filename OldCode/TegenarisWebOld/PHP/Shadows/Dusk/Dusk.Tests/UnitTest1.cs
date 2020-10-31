using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Dusk.Controllers;

namespace Dusk.Tests
{
  [TestClass]
  public class UnitTest1
  {
    [TestMethod]
    public void TestMethod1()
    {
      var testController = new DuskTestController();
      int testProduct = testController.getMeNumber();
      Assert.AreEqual(testProduct, 2);
    }
    [TestMethod]
    public void TestMethod2()
    {
      var testController = new DuskTestController();
      int testProduct = testController.getMeNumber();
      Assert.AreEqual(testProduct, 2);
    }
  }
}
