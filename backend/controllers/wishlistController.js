exports.getWishlist = async (req, res) => {

    try {

        res.json([]);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

exports.addToWishlist = async (req, res) => {

    try {

        res.json({
            success: true,
            message: "Product added to wishlist"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

exports.removeFromWishlist = async (req, res) => {

    try {

        res.json({
            success: true,
            message: "Product removed from wishlist"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};