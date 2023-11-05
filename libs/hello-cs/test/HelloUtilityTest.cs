namespace Connorjs.NxPolyglotExample.Hello;

public class HelloUtilityTest
{
    [Theory]
    [InlineData(null, "Hello, world!")]
    [InlineData("", "Hello, world!")]
    [InlineData("Nx", "Hello, Nx!")]
    public void Hello(string? name, string expected)
    {
        Assert.Equal(expected, HelloUtility.Hello(name));
    }
}
