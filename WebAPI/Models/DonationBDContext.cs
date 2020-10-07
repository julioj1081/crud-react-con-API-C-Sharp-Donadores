using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

//importaciones
using Microsoft.EntityFrameworkCore;
namespace WebAPI.Models
{
    public class DonationBDContext:DbContext
    {
        //constructor
        public DonationBDContext(DbContextOptions<DonationBDContext> options) : base(options)
        {

        }
        //add 
        public DbSet<DCandidate> DCandidates { get; set; } 
    }
}
