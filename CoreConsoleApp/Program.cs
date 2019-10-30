using System;

namespace CoreConsoleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] names = { "Charmaine", "Name2", "Name3", "Name4", "Name5" };
            Index iStart = 1;
            Index iEnd = ^4;
            Range range = iStart..iEnd;
            string newName = null;

            string[] selNames = names[range];
            Console.WriteLine($"These are the names: {string.Join(", ", selNames)}.");


            Console.WriteLine($"This is my new name {newName ??= "NewName"}.");
            Console.WriteLine($"This is my new name {newName ??= "NewName2"}.");

            Console.ReadLine();
        }
    }
}
