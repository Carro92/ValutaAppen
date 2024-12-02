using System.IO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Net.Http;
using System.Threading.Tasks;

public static class GetTopCurrencies
{
    private static readonly HttpClient client = new HttpClient();

    [FunctionName("GetTopCurrencies")]
    public static async Task<IActionResult> Run(
        [HttpTrigger(AuthorizationLevel.Function, "get", Route = null)] HttpRequest req,
        ILogger log)
    {
        string apiKey = System.Environment.GetEnvironmentVariable("CurrencyApiKey"); // Hämta API-nyckeln från miljövariabeln
        var response = await client.GetStringAsync($"https://api.exempel.com/top-currencies?apikey={apiKey}");
        return new OkObjectResult(response);
    }
}