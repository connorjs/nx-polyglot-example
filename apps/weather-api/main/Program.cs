using System;
using System.Text.Json;
using Connorjs.NxPolyglotExample.Hello;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// Base JSON serialization
var jsonSerializer = new JsonSerializerOptions();

// `/` returns hello string
app.MapGet("/", () => HelloUtility.Hello("ASP.NET"));

// `/hello` returns hello message (JSON)
app.MapGet(
    "/hello",
    ([FromQuery(Name = "name")] string? name) =>
        name != null && name.StartsWith("error", StringComparison.Ordinal)
            ? JsonMessage(name["error".Length..], 400)
            : JsonMessage(HelloUtility.Hello(name), 200)
);

app.Run();
return;

IResult JsonMessage(string message, int statusCode) =>
    Results.Json(new { message }, jsonSerializer, "application/json", statusCode);
