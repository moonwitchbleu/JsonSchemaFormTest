using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RazorTest.Domain;

namespace RazorTest.Data
{
    public class RazorTestContext : DbContext
    {
        public RazorTestContext (DbContextOptions<RazorTestContext> options)
            : base(options)
        {
        }

        public DbSet<LotType> LotType { get; set; }
        public DbSet<Contact> Contacts { get; set; }
        public DbSet<Commodity> Commodities { get; set; }
    }
}
