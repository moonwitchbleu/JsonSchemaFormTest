using System;
using System.Data;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using Microsoft.EntityFrameworkCore.Query;

namespace RazorTest.Data
{
    public interface IRepository<T> where T : class
    {
        IEnumerable<T> Get(Expression<Func<T, bool>> expression, Func<IQueryable<T>, IIncludableQueryable<T, object>> includes = null);
        IEnumerable<T> Get();
        void Add(T entity);
        void Delete(object id);
        void Delete(T entity);
        void Update(T entity);
    }

    public class Repository<T> : IRepository<T> where T : class
    {
        private RazorTestContext _dbContext;
        protected DbSet<T> _dbSet;

        public Repository(RazorTestContext razorTestContext)
        {
            _dbContext = razorTestContext;
            _dbSet = razorTestContext.Set<T>();
        }

        public IEnumerable<T> Get(Expression<Func<T, bool>> expression, Func<IQueryable<T>, IIncludableQueryable<T, object>> includes = null)
        {
            var result = _dbSet.Where(expression);

            if (includes != null)
            {
                result = includes(result);
            }

            return result;
        }

        public IEnumerable<T> Get()
        {
            return _dbSet.AsQueryable();
        }

        public T GetById(object id)
        {
            return _dbSet.Find(id);
        }

        public virtual void Add(T entity)
        {
            _dbSet.Add(entity);
        }

        public virtual void Delete(object id)
        {
            T entityToDelete = _dbSet.Find(id);
            Delete(entityToDelete);
        }

        public void Delete(T entity)
        {
            if (_dbContext.Entry(entity).State == EntityState.Detached)
            {
                _dbSet.Attach(entity);
            }
            _dbSet.Remove(entity);
        }

        public void Update(T entity)
        {
            _dbSet.Attach(entity);
            _dbContext.Entry(entity).State = EntityState.Modified;
        }
    }
}
