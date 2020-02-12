using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HideLocation
{
  class Program
  {
    static void Main(string[] args)
    {

      var path = @"C:\Christian\where-am-i-on-r6\src\maps\kafe";

      var files = Directory.GetFiles(path);
      foreach (var f in files.Where(file=>file.EndsWith(".png")))
      {
        var img = (Bitmap)Image.FromFile(f);

        var b = new SolidBrush(Color.Black);
        using (var g = Graphics.FromImage(img))
        {
          g.FillRectangle(b, new RectangleF(1050.0F, 1330.0F, 460, 60));
          img.Save(f.Replace(".png", "_h.png"));
          g.Dispose();
        }
      }
    }
  }
}
