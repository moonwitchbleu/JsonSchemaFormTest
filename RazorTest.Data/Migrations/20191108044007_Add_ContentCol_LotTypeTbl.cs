using Microsoft.EntityFrameworkCore.Migrations;

namespace RazorTest.Data.Migrations
{
    public partial class Add_ContentCol_LotTypeTbl : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Content",
                table: "LotType",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Content",
                table: "LotType");
        }
    }
}
