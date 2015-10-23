using System.IO;
using System.Linq;

namespace CreativeJar.Standards
{

    public class Formatting
    {
        public string Property1 { get; set; }

        public string Property2
        {
            get { return null; }
            set
            {
                Method();
                Set(value);
            }
        }

        public int Method()
        {
            var variable = new[] { 1, 2, 3 };

            for (var i = 0; i < variable.Length; i++)
            {
                variable[i] *= variable[i];
            }

            return variable.Any()
                ? variable.Last()
                : default(int);
        }

        private void Set(string value)
        {
            using (var stream = File.Open(value, FileMode.Open))
            using (var streamReader = new StreamReader(stream))
            {
                Property1 = streamReader.ReadToEnd();
            }
        }
    }
}