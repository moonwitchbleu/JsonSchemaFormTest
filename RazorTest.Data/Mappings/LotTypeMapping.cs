using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RazorTest.Domain;
using System;
using System.Collections.Generic;
using System.Text;

namespace RazorTest.Data.Mappings
{
    public class LotTypeMapping
    {
        public LotTypeMapping(EntityTypeBuilder<LotType> entityTypeBuilder)
        {
            entityTypeBuilder.HasKey(t => t.LotTypeId);
            entityTypeBuilder.Property(t => t.Title)
                .IsRequired()
                .HasMaxLength(150);
            entityTypeBuilder.Property(t => t.Description)
                .IsRequired()
                .HasMaxLength(250);
            entityTypeBuilder.Property(t => t.Model)
                .HasMaxLength(150);
            entityTypeBuilder.Property(t => t.AgentUserCode)
                .HasMaxLength(150);

        }
    }
}
