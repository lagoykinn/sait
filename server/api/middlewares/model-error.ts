import { ModelException } from "../exceptions/ModelException"

export default function (err, req, res, next,) {
    console.log()
    if(err instanceof ModelException) {
        return res
                .status(err.status)
                .json({message: err.message})
    }

    return res.status(500).json({message: "Incoming creating model Error!"})
}