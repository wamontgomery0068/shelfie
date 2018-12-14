const getInventory = (req, res, next) => {
    req.app
    .get("db")
    .get_inventory()
    .then(response => res.status(200).send(response))
    .catch(err => res.status(500).send(err));
};

const addProduct = (req, res, next) => {
    const { name, price, img } = req.body;
    req.app
    .get("db")
    .add_product([name, price, img])
    .then(res => res.status(200).send(`You have successfully added ${name} to the DataBase!`))
    .catch(err => res.status(500).send(err));
};

module.exports = {
    getInventory,
    addProduct,
};