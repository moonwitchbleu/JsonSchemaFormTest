using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using RazorTest.Data;
using RazorTest.Domain;

namespace RazorTest.Pages
{
    public class IndexModel : PageModel
    {
        private readonly RazorTest.Data.RazorTestContext _context;

        public IndexModel(RazorTest.Data.RazorTestContext context)
        {
            _context = context;
        }

        public IList<Domain.LotType> LotType { get;set; }

        public async Task OnGetAsync()
        {
            LotType = await _context.LotType.ToListAsync();
        }
    }
}
