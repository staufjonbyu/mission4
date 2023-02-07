using System.ComponentModel.DataAnnotations;

namespace mission4.Models
{
    public class CalculatorModel
    {
        //Sets the variables and ranges for the variables
        [Required]
        [Range(0,100, ErrorMessage = "C'mon son your assignment grade must be bewtween 0 and 100")]
        public float Assignment { get; set; }
        [Range(0, 100, ErrorMessage = "C'mon son your group grade must be bewtween 0 and 100")]
        public float Group { get; set; }
        [Range(0, 100, ErrorMessage = "C'mon son your Midterm grade must be bewtween 0 and 100")]
        public float Midterm { get; set; }
        [Range(0, 100, ErrorMessage = "C'mon son your Quiz grade must be bewtween 0 and 100")]
        public float Quiz { get; set; }
        [Range(0, 100, ErrorMessage = "C'mon son your Final grade must be bewtween 0 and 100")]
        public float Final { get; set; }
        [Range(0, 100, ErrorMessage = "C'mon son your Intex grade must be bewtween 0 and 100")]
        public float Intex { get; set; }




    }
}
