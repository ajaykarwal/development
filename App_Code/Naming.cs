namespace CreativeJar.Standards
{
    public interface INaming
    {}

    public class Naming<TName> : INaming
    {
        private string _myPrivateField;

        public string MyPublicField;

        public Naming()
        {
            //...
        }

        public string MyProperty { get; set; }

        public TName MyMethod()
        {
            return default(TName);
        }

        public enum MyEnum
        {
            ItemOne,
            ItemTwo,
            ItemThree
        }
    }
}