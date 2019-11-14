using System;
using System.Collections.Generic;
using System.Text;

namespace RazorTest.Data
{
    public interface IUnitOfWork : IDisposable
    {
        RazorTestContext Context { get; }
        void Commit();
    }

    public class UnitOfWork : IUnitOfWork
    {
        public RazorTestContext Context { get; }

        public UnitOfWork(RazorTestContext razorTestContext)
        {
            Context = razorTestContext;
        }

        public void Commit()
        {
            Context.SaveChanges();
        }

        public void Dispose()
        {
            Context.Dispose();
        }
    }
}
