import java.util.*;
import java.io.FileWriter;
import java.io.IOException;

class User {
    private String userId;
    private String name;
    // constructor to create user
    public User(String userId, String name) {
        // validate name (only letters and spaces)
        if (!name.matches("[a-zA-Z ]+")) {
            throw new IllegalArgumentException(
                    "invalid name: only alphabets and spaces allowed"
            );
        }
        // validate user id (only digits)
        if (!userId.matches("\\d+")) {
            throw new IllegalArgumentException(
                    "userid must contain only digits."
            );
        }
        this.userId = userId;
        this.name = name;
    }
    // getter for user id
    public String getUserId() {
        return userId;
    }
    // getter for name
    public String getName() {
        return name;
    }
}

// split interface
interface Split {
    Map<User, Double> calculateSplit(double amount, List<User> users);
}

// equal split implementation
class EqualSplit implements Split {
    public Map<User, Double> calculateSplit(double amount, List<User> users) {
        double share = amount / users.size();
        Map<User, Double> splitMap = new HashMap<>();
        // assign equal share to each user
        for (User user : users) {
            splitMap.put(user, share);
        }
        return splitMap;
    }
}

class Expense {
    private String expenseId;
    private String description;
    private double amount;
    private User paidBy;
    private List<User> participants;
    private Split split;

    // constructor to create expense
    public Expense(String expenseId, String description, double amount, User paidBy, List<User> participants, Split split) {
        this.expenseId = expenseId;
        this.description = description;
        this.amount = amount;
        this.paidBy = paidBy;
        this.participants = participants;
        this.split = split;
    }
    public String getExpenseId() {
        return expenseId;
    }
    public String getDescription() {
        return description;
    }
    public double getAmount() {
        return amount;
    }

    public User getPaidBy() {
        return paidBy;
    }

    public List<User> getParticipants() {
        return participants;
    }

    public Split getSplit() {
        return split;
    }
}

class Manager {
    private String managerId;
    private String managerName;
    private List<User> members;
    private List<Expense> expenses;
    private Map<User, Map<User, Double>> balances;
    // constructor to initialize manager
    public Manager(String managerId, String managerName, List<User> members) {
        this.managerId = managerId;
        this.managerName = managerName;
        this.members = new ArrayList<>(members);
        this.expenses = new ArrayList<>();
        this.balances = new HashMap<>();
        // initialize balance map for each user
        for (User user : members) {
            balances.put(user, new HashMap<>());
        }
    }
    // add new expense
    public void addExpense(Expense expense) {
        expenses.add(expense);
        Map<User, Double> splitMap = expense.getSplit().calculateSplit(expense.getAmount(), expense.getParticipants());
        // update balances
        for (User user : expense.getParticipants()) {
            if (!user.equals(expense.getPaidBy())) {
                double share = splitMap.get(user);
                balances.get(user).put(expense.getPaidBy(), balances.get(user).getOrDefault(expense.getPaidBy(), 0.0) + share);
            }
        }
    }
    // display expenses and save
    public void showExpenses() {
        StringBuilder output = new StringBuilder();
        output.append("\nexpenses in group: ").append(managerName).append("\n");
        for (Expense e : expenses) {
            output.append(e.getExpenseId()).append(" - ").append(e.getDescription()).append(" - ₹").append(e.getAmount()).append(" - paid by ").append(e.getPaidBy().getName()).append("\n");
        }
        System.out.println(output);
        saveToFile(output.toString());
    }
    // display balances and save to file
    public void showBalances() {
        StringBuilder output = new StringBuilder();
        output.append("\nraw balances:\n");
        for (User debtor : balances.keySet()) {
            for (User creditor : balances.get(debtor).keySet()) {
                double amount = balances.get(debtor).get(creditor);
                if (amount > 0) {
                    output.append(debtor.getName()).append(" owes ").append(creditor.getName()).append(" ₹").append(amount).append("\n");
                }
            }
        }
        System.out.println(output);
        saveToFile(output.toString());
    }
    // save output to txt file
    private void saveToFile(String data) {
        try (FileWriter writer = new FileWriter("expenses.txt", true)) {
            writer.write(data);
            writer.write("----------------------------------\n");
        } catch (IOException e) {
            System.out.println("file error: " + e.getMessage());
        }
    }
}
public class hack {
    public static void main(String[] args) {
        // create users
        User u1 = new User("1", "Sunny");
        User u2 = new User("2", "Abhinav");
        User u3 = new User("3", "Prakhar");
        User u4 = new User("4","Ratna");

        // create manager
        Manager manager = new Manager(
                "M1",
                "outingManager",
                Arrays.asList(u1, u2, u3)
        );
        Split equalSplit = new EqualSplit();

        // add expenses
        manager.addExpense(new Expense("E1", "Hotel", 6000, u1, Arrays.asList(u1, u2, u3), equalSplit));

        manager.addExpense(new Expense("E2", "Dinner", 3000, u2, Arrays.asList(u1, u2, u3), equalSplit));

        // display results
        manager.showExpenses();
        manager.showBalances();
    }
}
