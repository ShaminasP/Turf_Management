const UserProfile = () => {
    
  return (
    <section className="p-6 bg-gray-200 text-gray-900 mt-20">
      <form
        novalidate=""
        action=""
        className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-medium">Profile</p>
            <p className="text-xs">Adipisci fuga autem eum!</p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label for="username" className="text-sm">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Username"
                className="w-full py-2 rounded-md  border-gray-100 text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="mobile" className="text-sm">
                Mobile
              </label>
              <input
                id="Mobile"
                type="text"
                placeholder="Mobile"
                className="w-full py-2 rounded-md  border-gray-100 text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="email" className="text-sm">
                Email
              </label>
              <input
                id="email"
                type="text"
                placeholder="email"
                className="w-full py-2 rounded-md  border-gray-100 text-gray-900"
              />
            </div>
          </div>
        </fieldset>
      </form>
    </section>
  );
};
export default UserProfile;
