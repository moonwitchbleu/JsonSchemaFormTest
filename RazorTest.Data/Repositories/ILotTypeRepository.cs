using RazorTest.Domain;
using RazorTest.Data;
using System;
using System.Collections.Generic;
using System.Text;

namespace RazorTest.Data.Repositories
{
    public interface ILotTypeRepository : IRepository<LotType>
    {
    }

    public class LotTypeRepository : Repository<LotType>, ILotTypeRepository
    {
        public LotTypeRepository(IUnitOfWork unitOfWork)
            :base(unitOfWork)
        {
        }
    }
}
