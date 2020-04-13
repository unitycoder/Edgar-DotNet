﻿using MapGeneration.Core.ChainDecompositions;
using MapGeneration.Core.LayoutEvolvers.SimulatedAnnealing;
using MapGeneration.Core.LayoutGenerators.DungeonGenerator;
using SandboxEvolutionRunner.Utils;

namespace SandboxEvolutionRunner.Scenarios
{
    public class OneImprovementEnabled : Scenario
    {
        private DungeonGeneratorConfiguration<int> GetGreedyTreesConfiguration(NamedMapDescription namedMapDescription)
        {
            var configuration = GetOldConfiguration(namedMapDescription);
            configuration.SimulatedAnnealingConfiguration.GetConfiguration(0).HandleTreesGreedily = true;

            return configuration;
        }

        private DungeonGeneratorConfiguration<int> GetMaxIterationsConfiguration(NamedMapDescription namedMapDescription)
        {
            var configuration = GetOldConfiguration(namedMapDescription);
            configuration.SimulatedAnnealingConfiguration = new SimulatedAnnealingConfigurationProvider(new SimulatedAnnealingConfiguration()
            {
                MaxIterationsWithoutSuccess = 100,
            });

            return configuration;
        }

        private DungeonGeneratorConfiguration<int> GetChainsConfiguration(NamedMapDescription namedMapDescription)
        {
            var chainDecompositionOld = new BreadthFirstChainDecomposition<int>(new ChainDecompositionConfiguration());
            var chainDecomposition = new TwoStageChainDecomposition<int>(namedMapDescription.MapDescription, chainDecompositionOld);

            var configuration = GetOldConfiguration(namedMapDescription);
            configuration.Chains = chainDecomposition.GetChains(namedMapDescription.MapDescription.GetGraph());

            return configuration;
        }

        private DungeonGeneratorConfiguration<int> GetOldConfiguration(NamedMapDescription namedMapDescription)
        {
            var chainDecompositionOld = new BreadthFirstChainDecompositionOld<int>();
            var chainDecomposition = new TwoStageChainDecomposition<int>(namedMapDescription.MapDescription, chainDecompositionOld);

            var configuration = GetBasicConfiguration(namedMapDescription);
            configuration.Chains = chainDecomposition.GetChains(namedMapDescription.MapDescription.GetGraph());
            configuration.SimulatedAnnealingConfiguration = new SimulatedAnnealingConfigurationProvider(new SimulatedAnnealingConfiguration()
            {
                MaxIterationsWithoutSuccess = 10000,
            });

            return configuration;
        }

        protected override void Run()
        {
            var mapDescriptions = GetMapDescriptions();

            RunBenchmark(mapDescriptions, GetGreedyTreesConfiguration, Options.FinalEvaluationIterations, "GreedyTrees");
            RunBenchmark(mapDescriptions, GetMaxIterationsConfiguration, Options.FinalEvaluationIterations, "MaxIterations");
            RunBenchmark(mapDescriptions, GetChainsConfiguration, Options.FinalEvaluationIterations, "ChainDecomposition");
            RunBenchmark(mapDescriptions, GetOldConfiguration, Options.FinalEvaluationIterations, "Old");
        }
    }
}