import { Category } from "../entities/category";

type CreateData = {
  name: string;
  user: any;
};

type UpdateData = {
  name?: string;
};

class CategoryService {
  async create(data: CreateData) {
    return Category.create(data).save();
  }

  async retrieveAll(userId: number) {
    return Category.find({
      where: {
        user: userId,
      },
    });
  }

  async update(categoryId: number, data: UpdateData) {
    await Category.update(
      {
        id: categoryId,
      },
      data
    );

    return Category.findOne({
      where: {
        id: categoryId,
      },
    });
  }

  async delete(categoryId: number) {
    return Category.delete({ id: categoryId });
  }
}

export default new CategoryService();