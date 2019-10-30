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

        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
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
