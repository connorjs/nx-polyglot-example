namespace Connorjs.NxPolyglotExample.Hello;

public static class HelloUtility
{
    /// <summary>
    /// Returns a hello string.
    /// </summary>
    /// <param name="name">The name to include. Optional.</param>
    /// <returns>Hello string.</returns>
    public static string Hello(string? name)
    {
        var nameToReturn = string.IsNullOrEmpty(name) ? "world" : name;
        return $"Hello, {nameToReturn}!";
    }
}
