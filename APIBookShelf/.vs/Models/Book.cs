

using System.ComponentModel.DataAnnotations;

public class Book
{
    [Key]
    public int BOOK_ID { get; set; }
    public required string BOOK_NAME { get; set; }
    public required string AUTHOR { get; set; }
}
