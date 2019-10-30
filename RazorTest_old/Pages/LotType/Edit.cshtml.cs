using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using RazorTest.Data;
using RazorTest.Domain;

namespace RazorTest.Pages.LotType
{
    public class EditModel : PageModel
    {
        private readonly RazorTest.Data.RazorTestContext _context;

        public EditModel(RazorTest.Data.RazorTestContext context)
        {
            _context = context;
        }

        [BindProperty]
        public Domain.LotType LotType { get; set; }

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            LotType = await _context.LotType.FirstOrDefaultAsync(m => m.LotTypeId == id);

            if (LotType == null)
            {
                return NotFound();
            }
            return Page();
        }

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            _context.Attach(LotType).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LotTypeExists(LotType.LotTypeId))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return RedirectToPage("./Index");
        }

        private bool LotTypeExists(int id)
        {
            return _context.LotType.Any(e => e.LotTypeId == id);
        }
    }
}
