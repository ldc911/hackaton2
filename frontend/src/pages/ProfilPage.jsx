import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const tabs = [{ name: "Profil", href: "#", current: true }];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProfilPage() {
  const [profile, setProfile] = useState({});
  const { user: currentUser } = useSelector((state) => state.auth);

  const [isOwner, setIsOwner] = useState(false);
  const [estAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (isOwner || estAdmin) window.location.replace("/");
  }, [isOwner][estAdmin]);

  useEffect(() => {
    if (currentUser) {
      setIsOwner(!currentUser.user.prenom);
      setIsAdmin(currentUser.user.estAdmin === 1);
      setProfile({
        name: `${currentUser.user.prenom} ${currentUser.user.nom}`,
        imageUrl: currentUser.user.avatar,
        coverImageUrl: "https://picsum.photos/1950/1300",
        fields: {
          Email: currentUser.user.email,
          Ville: currentUser.user.ville,
          Date_de_naissance: currentUser.user.dateNaissance.split("T")[0],
          Permis_n: currentUser.user.NumeroPermis,
        },
      });
    } else {
      setIsOwner(false);
      setIsAdmin(false);
    }
  }, [currentUser]);

  return (
    <div className="h-full">
      {profile.name && (
        <div className="">
          <div className="flex-1 relative z-0 flex overflow-hidden">
            <div className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
              <div>
                {/* Profile header */}
                <div>
                  <div>
                    <img
                      className="h-32 w-full object-cover lg:h-48"
                      src={profile.coverImageUrl}
                      alt=""
                    />
                  </div>
                  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                      <div className="flex">
                        <img
                          className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                          src={profile.imageUrl}
                          alt=""
                        />
                      </div>
                      <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                        <div className="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
                          <h1 className="text-2xl font-bold text-gray-900 truncate">
                            {profile.name}
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
                      <h1 className="text-2xl font-bold text-gray-900 truncate">
                        {profile.name}
                      </h1>
                    </div>
                  </div>
                </div>

                {/* Tabs */}
                <div className="mt-6 sm:mt-2 2xl:mt-5">
                  <div className="border-b border-gray-200">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                      <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                        {tabs.map((tab) => (
                          <a
                            key={tab.name}
                            href={tab.href}
                            className={classNames(
                              tab.current
                                ? "border-pink-500 text-gray-900"
                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                              "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                            )}
                            aria-current={tab.current ? "page" : undefined}
                          >
                            {tab.name}
                          </a>
                        ))}
                      </nav>
                    </div>
                  </div>
                </div>

                {/* Description list */}
                <div className="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                  <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                    {Object.keys(profile.fields).map((field) => (
                      <div key={field} className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          {field}
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {profile.fields[field]}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
