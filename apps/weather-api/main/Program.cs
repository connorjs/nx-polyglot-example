using Connorjs.NxPolyglotExample.Hello;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => HelloUtility.Hello("ASP.NET"));

app.MapGet("/hello", ([FromQuery(Name = "name")] string? name) => HelloUtility.Hello(name));

app.Run();
