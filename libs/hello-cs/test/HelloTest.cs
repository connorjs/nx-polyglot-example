namespace Connorjs.NxPolyglotExample.Hello;

public class HelloTest
{
    [Theory]
    [InlineData(null, "Hello, world!")]
    [InlineData("", "Hello, world!")]
    [InlineData("Nx", "Hello, Nx!")]
    public void ShouldSayHello(string? name, string expected)
    {
        Assert.Equal(Hello.hello(name), expected);
    }
}
