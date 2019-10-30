using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using RazorTest.Data;
using RazorTest.Domain;

namespace RazorTest.Pages.LotType
{
    public class CreateModel : PageModel
    {
        private readonly RazorTest.Data.RazorTestContext _context;

        public CreateModel(RazorTest.Data.RazorTestContext context)
        {
            _context = context;
        }

        public IActionResult OnGet()
        {
            return Page();
        }

        [BindProperty]
        public Domain.LotType LotType { get; set; }

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            _context.LotType.Add(LotType);
            await _context.SaveChangesAsync();

            return RedirectToPage("./Index");
        }
    }
}