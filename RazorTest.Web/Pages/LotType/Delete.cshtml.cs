﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using RazorTest.Data;
using RazorTest.Domain;

namespace RazorTest.Pages.LotType
{
    public class DeleteModel : PageModel
    {
        private readonly RazorTest.Data.RazorTestContext _context;

        public DeleteModel(RazorTest.Data.RazorTestContext context)
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

        public async Task<IActionResult> OnPostAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            LotType = await _context.LotType.FindAsync(id);

            if (LotType != null)
            {
                _context.LotType.Remove(LotType);
                await _context.SaveChangesAsync();
            }

            return RedirectToPage("./Index");
        }
    }
}
