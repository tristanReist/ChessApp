using COokie.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace COokie
{
    public class Current
    {
        private static object instanceLock = new object();
        public static Current Instance { get; private set; }
        public static void Init()
        {
            lock (instanceLock)
            {
                if (Instance == null)
                {
                    Instance = new Current();
                }
            }
        }

        public GameCache GameCache { get; set; }

        private Current()
        {
            GameCache = new GameCache();  
        }
    }
}
