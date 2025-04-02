export function BudgetTable() {
    const data = [
        { item: "Transport aller-retour", costPerPerson: 234, totalForFour: 937.6 },
        { item: "Hébergement (1 nuit en refuge)", costPerPerson: 130, totalForFour: 650 },
        { item: "Repas", costPerPerson: 170, totalForFour: 680 },
    ];
    
    const totalPerPerson = data.reduce((sum, row) => sum + row.costPerPerson, 0);
    const totalForFour = data.reduce((sum, row) => sum + row.totalForFour, 0);

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                    <tr>
                        <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Poste de dépense</th>
                        <th className="px-6 py-3">Coût par personne (€)</th>
                        <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Total pour 4 personnes (€)</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                            <td className="px-6 py-4 font-medium text-gray-900 bg-gray-50 dark:text-white dark:bg-gray-800">
                                {row.item}
                            </td>
                            <td className="px-6 py-4">{row.costPerPerson}</td>
                            <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">{row.totalForFour}</td>
                        </tr>
                    ))}
                    <tr className="font-bold border-t border-gray-300">
                        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">Total estimé</td>
                        <td className="px-6 py-4">{totalPerPerson}€</td>
                        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">{totalForFour}€</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
