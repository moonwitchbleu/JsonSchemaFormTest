using Microsoft.EntityFrameworkCore.Migrations;

namespace RazorTest.Data.Migrations
{
    public partial class AddSeedData_BidTypeTbl : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(_script);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(_rollbackScript);
        }

        private string _script = @"SET IDENTITY_INSERT [BidTypes] ON;
INSERT INTO [BidTypes]
           ([BidTypeId],[BidTypeName])
     VALUES
           (1, '$/Head'),
		   (2, 'c/kg Live'),
		   (3, 'c/kg Dressed'),
		   (4, 'Grid')";

        private string _rollbackScript = @"DELETE FROM [BidTypes]
DBCC CHECKIDENT('BidTypes', RESEED, 0)";
    }
}
