import groovy.json.JsonSlurper
import org.jetbrains.kotlin.gradle.dsl.JvmTarget

// PulsoIcon for Android: the same icons, props and motion as the npm package `pulsoicon-react`.
// The icon files are generated from packages/core by scripts/gen.ts; the runtime is hand-written.
plugins {
    alias(libs.plugins.android.library)
    alias(libs.plugins.kotlin.compose)
    alias(libs.plugins.maven.publish)
}

/** One version for every package: the root package.json of the PulsoIcon repo. */
val pulsoIconVersion = (JsonSlurper().parse(rootDir.resolve("../package.json")) as Map<*, *>)["version"] as String

group = "com.citypulso"
version = pulsoIconVersion

android {
    namespace = "com.citypulso.pulsoicon"

    compileSdk {
        version = release(37)
    }

    defaultConfig {
        minSdk = 26
        consumerProguardFiles("consumer-rules.pro")
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }

    buildFeatures {
        compose = true
    }
}

kotlin {
    compilerOptions {
        jvmTarget.set(JvmTarget.JVM_17)
    }
}

dependencies {
    implementation(platform(libs.androidx.compose.bom))
    implementation(libs.androidx.compose.ui)
    implementation(libs.androidx.compose.ui.graphics)
    implementation(libs.androidx.compose.foundation)
    // LocalContentColor: icons tint like material3 Icon() by default (the React package's `currentColor`).
    implementation(libs.androidx.compose.material3)

    testImplementation(libs.junit)
}

mavenPublishing {
    publishToMavenCentral()
    // Signs only when a key is configured (CI release); local publishToMavenLocal works without one.
    if (providers.gradleProperty("signingInMemoryKey").isPresent) signAllPublications()
    coordinates("com.citypulso", "pulsoicon-compose", pulsoIconVersion)
    pom {
        name.set("PulsoIcon")
        description.set("Animated icons for Jetpack Compose, each with its own hand-written motion. The same icons and motion as the pulsoicon-react npm package.")
        url.set("https://pulsoicon.com")
        licenses {
            license {
                name.set("ISC License")
                url.set("https://github.com/CityPulso/PulsoIcon/blob/main/LICENSE")
            }
        }
        developers {
            developer {
                id.set("citypulso")
                name.set("CityPulso")
                url.set("https://github.com/CityPulso")
            }
        }
        scm {
            url.set("https://github.com/CityPulso/PulsoIcon")
            connection.set("scm:git:git://github.com/CityPulso/PulsoIcon.git")
            developerConnection.set("scm:git:ssh://git@github.com/CityPulso/PulsoIcon.git")
        }
    }
}
