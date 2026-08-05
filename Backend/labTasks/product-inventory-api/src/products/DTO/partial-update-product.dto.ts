import { PartialType } from "@nestjs/mapped-types";
import { creatproductDTO } from "./Create-product.dto";

export class partialUpdateProductDTO extends PartialType(creatproductDTO) {}