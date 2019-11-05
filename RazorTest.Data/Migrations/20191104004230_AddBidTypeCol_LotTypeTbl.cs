using Microsoft.EntityFrameworkCore.Migrations;

namespace RazorTest.Data.Migrations
{
    public partial class AddBidTypeCol_LotTypeTbl : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "BidTypeId",
                table: "LotType",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_LotType_BidTypeId",
                table: "LotType",
                column: "BidTypeId");

            migrationBuilder.AddForeignKey(
                name: "FK_LotType_BidTypes_BidTypeId",
                table: "LotType",
                column: "BidTypeId",
                principalTable: "BidTypes",
                principalColumn: "BidTypeId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_LotType_BidTypes_BidTypeId",
                table: "LotType");

            migrationBuilder.DropIndex(
                name: "IX_LotType_BidTypeId",
                table: "LotType");

            migrationBuilder.DropColumn(
                name: "BidTypeId",
                table: "LotType");
        }
    }
}
