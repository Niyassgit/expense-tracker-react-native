import { View} from "react-native"
import ExpensesSummary from "./ExpensesSummary"
import ExpensesList from "./ExpensesList"

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2025-12-19')
    },
    {
        id: 'e2',
        description: 'A pair of trousers',
        amount: 59.99,
        date: new Date('2026-01-15')
    },
    {
        id: 'e3',
        description: '10 kg of  bananas',
        amount: 39.99,
        date: new Date('2025-01-14')
    },
    {
        id: 'e4',
        description: 'A Book',
        amount: 9.99,
        date: new Date('2025-01-15')
    },
    {
        id: 'e5',
        description: 'A Book for Life',
        amount: 10.99,
        date: new Date('2025-01-17')
    }
]

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
    return (
        <View>
            <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
            <ExpensesList expenses={DUMMY_EXPENSES} />
        </View>
    )
}

export default ExpensesOutput
