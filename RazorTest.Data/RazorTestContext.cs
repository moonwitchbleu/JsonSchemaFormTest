using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RazorTest.Data.Mappings;
using RazorTest.Domain;

namespace RazorTest.Data
{
    public class RazorTestContext : DbContext
    {
        public RazorTestContext (DbContextOptions<RazorTestContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            new LotTypeMapping(modelBuilder.Entity<LotType>());
        }

        public DbSet<LotType> LotType { get; set; }
        public DbSet<Contact> Contacts { get; set; }
        public DbSet<BidType> BidTypes { get; set; }
    }
}
