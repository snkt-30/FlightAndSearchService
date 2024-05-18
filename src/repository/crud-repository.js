class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      console.log("land here");
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      console.log(error);
      throw { error: "Something went wrong" };
    }
  }

  async get() {
    try {
      const response = await this.model.findAll();
      return response;
    } catch (error) {
      console.log(error);
      throw { error: "Something went wrong" };
    }
  }

  async delete(modelId) {
    try {
      const response = await this.model.destroy(modelId);
      return response;
    } catch (error) {
      console.log(error);
      throw { error: "Something went wrong" };
    }
  }

  async update(modelId, data) {
    try {
      const response = await this.model.update(data, {
        where: {
          id: modelId,
        },
      });
      return response;
    } catch (error) {
      console.log(error);
      throw { error: "Something went wrong" };
    }
  }
}


module.exports = CrudRepository;