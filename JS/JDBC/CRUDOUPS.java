import java.sql.Connection;
import java.util.*;
public class CRUDOUPS{
    static Connection con;
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
            try{
                Class.forName("oracle.jdbc.OracleDriver");
                con=DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:orcl", "troy", "trojanhorse");
                while(true){
                    PreparedStatement stmt;
                    System.out.println("1. insert\n2. update\n3. find\n4. findAll\n5. delete\n6. exit\n");
                    System.out.println("Enter the choice:");
                    int choice=sc.nextInt();
                    sc.nextLine();
                    switch(choice){
                        case 1:{
                            System.out.println("Enter name and price of the product:");
                            String name=sc.nextLine();
                            double price=sc.nextLine();
                            
                        }
                        case 2:{

                        }
                    }
                }
            }
    }
}